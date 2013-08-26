var idParts = ctx.doc._id.split('-');

if (idParts.length > 1 && idParts[0] == 'common') 
{
    ctx._type = 'common';
} 
else 
{
    ctx.ignore = true;
}
