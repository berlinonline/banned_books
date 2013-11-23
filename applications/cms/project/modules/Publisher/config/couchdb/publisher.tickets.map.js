/**
 * Access all PublisherWorkflowItem tickets by identifier.
 */
function(doc)
{
    if (doc.type && 'PublisherWorkflowItem' === doc.type)
    {
        emit(doc._id, doc.ticket);
    }
}
