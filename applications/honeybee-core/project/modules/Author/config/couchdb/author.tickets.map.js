/**
 * Access all AuthorWorkflowItem tickets by identifier.
 */
function(doc)
{
    if (doc.type && 'AuthorWorkflowItem' === doc.type)
    {
        emit(doc._id, doc.ticket);
    }
}
