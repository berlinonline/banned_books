import re
import csv
import requests
import json
import unicodedata


csv_file = 'honeybee-core/project/app/verbannte-buecher.csv'
index_name = "banned_books_development-vagrant_pulq_fe"
index_file = "frontend/project/app/config/elasticsearch/default.index.json"
mapping_file = "frontend/project/modules/Book/config/elasticsearch/book.mapping.json"

index = json.loads(open(index_file).read())
mapping = json.loads(open(mapping_file).read())
index["mappings"]["book"] = mapping

es_url = "http://banned-books.dev:9200/"
index_url = es_url + index_name + "/"
book_url = index_url + 'book/'

print "delete index"
response = requests.delete(index_url)
print str(response.status_code) + ": " + response.text

print "create new index"
response = requests.put(index_url, json.dumps(index))
print str(response.status_code) + ": " + response.text

#exit()

reader = csv.DictReader(open(csv_file),skipinitialspace=True,delimiter=";")
headers = reader.fieldnames

for row in reader:
    book = {
        "_id": row["id"],
        "title": row["titel"],
        "authors": [
            { "first_name": row["autor_vorname"], "last_name": row["autor_nachname"] }
        ],
        "editions": [
            {
                "publisher": row["verlag"],
                "location": row["ort"],
                "year": row["jahr"]
            }
        ],
        "pages": row["seite"],
        "slug": re.sub(r'\W+','-', row["titel"].lower())
    }

    if row["verlag_2"]:
        book["editions"].append({
            "publisher": row["verlag_2"],
            "location": row["ort_2"],
            "year": row["jahr_2"]
        })

    #print book
    url = book_url + row["id"]
    print url
    response = requests.put(url, json.dumps(book))
    print str(response.status_code) + " - " + response.text
