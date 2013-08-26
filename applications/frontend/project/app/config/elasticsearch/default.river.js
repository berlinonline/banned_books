var idParts = ctx.doc._id.split('-');
var typeName;

if (idParts.length > 1) {
    typeName = idParts[0];
    ctx._type = typeName;
} else {
    ctx.ignore = true;
}
