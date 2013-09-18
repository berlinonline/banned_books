/**
 * Access all AuthorWorkflowItem by identifier.
 */
function(doc)
{
    if (doc.type && 'AuthorWorkflowItem' === doc.type)
    {
        emit(doc._id, doc);
    }
}
