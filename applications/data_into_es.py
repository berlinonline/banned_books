import re
import csv
import requests
import json
import unicodedata

csv_file = 'honeybee-core/project/app/verbannte-buecher.csv'
index_name = "banned_books_development-vagrant_pulq_fe"
index_file = "frontend/project/app/config/elasticsearch/default.index.json"
book_mapping_file = "frontend/project/modules/Book/config/elasticsearch/book.mapping.json"
author_mapping_file = "frontend/project/modules/Book/config/elasticsearch/author.mapping.json"
publisher_mapping_file = "frontend/project/modules/Book/config/elasticsearch/publisher.mapping.json"

index = json.loads(open(index_file).read())
book_mapping = json.loads(open(book_mapping_file).read())
author_mapping = json.loads(open(author_mapping_file).read())
publisher_mapping = json.loads(open(publisher_mapping_file).read())
index["mappings"]["book"] = book_mapping
index["mappings"]["author"] = author_mapping
index["mappings"]["publisher"] = publisher_mapping

es_url = "http://banned-books.dev:9200/"
index_url = es_url + index_name + "/"
book_url = index_url + 'book/'
author_url = index_url + 'author/'
publisher_url = index_url + 'publisher/'

print "Deleting index"
response = requests.delete(index_url)
if response.status_code >= 400:
    print response.status_code + ':  ' + repsonse.text

print "Creating index"
response = requests.put(index_url, json.dumps(index))
if response.status_code >= 400:
    print response.status_code + ':  ' + repsonse.text

#exit()

reader = csv.DictReader(open(csv_file),skipinitialspace=True,delimiter=";")
headers = reader.fieldnames

authors = {}
publishers = {}

def publisher(publisher_name):
    return {
        "name": publisher_name,
        "slug": re.sub(r'\W+','-', publisher_name.lower()),
        "suggest": publisher_name
    }

print "Creating books"
for row in reader:
    author_full_name = row['autor_vorname'] + ' ' + row['autor_nachname']
    authors[author_full_name] = {
        "firstName": row["autor_vorname"],
        "lastName": row["autor_nachname"],
        "slug": re.sub(r'\W+','-', author_full_name.lower()),
        "suggest": author_full_name
    }
    book = {
        "_id": row["id"],
        "title": row["titel"],
        "authors": [
            authors[author_full_name]
        ],
        "editions": [
            {
                "publisher": publisher(row["verlag"]),
                "location": row["ort"],
                "year": row["jahr"]
            }
        ],
        "pages": row["seite"],
        "slug": re.sub(r'\W+','-', row["titel"].lower()),
        "suggest": row["titel"]
    }
    publishers[row["verlag"]] = publisher(row["verlag"])

    if row["verlag_2"]:
        book["editions"].append({
            "publisher": publisher(row["verlag_2"]),
            "location": row["ort_2"],
            "year": row["jahr_2"]
        })
        publishers[row["verlag_2"]] = publisher(row["verlag_2"])

    #print book
    url = book_url + row["id"]
    response = requests.put(url, json.dumps(book))
    if response.status_code >= 400:
        print str(response.status_code) + ':  ' + response.text


print "Creating authors ..."
for name, author in authors.items():
    response = requests.post(author_url, json.dumps(author))
    if response.status_code >= 400:
        print str(response.status_code) + ':  ' + response.text

print "Creating publishers..."
for name, publisher in publishers.items():
    response = requests.post(publisher_url, json.dumps(publisher))
    if response.status_code >= 400:
        print str(response.status_code) + ':  ' + response.text
