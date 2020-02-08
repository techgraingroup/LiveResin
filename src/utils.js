export const getImageFromList = (name, list) => list.find(item => item.node.relativePath === name).node
