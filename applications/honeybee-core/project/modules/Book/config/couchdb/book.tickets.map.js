/**
 * Access all BookWorkflowItem tickets by identifier.
 */
function(doc)
{
    if (doc.type && 'BookWorkflowItem' === doc.type)
    {
        emit(doc._id, doc.ticket);
    }
}
