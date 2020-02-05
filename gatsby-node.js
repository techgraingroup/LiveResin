const path = require("path")
const crypto = require("crypto")
const fs = require("fs")
const util = require("util")
const glob = require("glob")
const hash = crypto
  .createHash("md5")
  .update(`${new Date().getTime()}`)
  .digest("hex")

const addPageDataVersion = async file => {
  const stats = await util.promisify(fs.stat)(file)
  if (stats.isFile()) {
    console.log(`Adding version to page-data.json in ${file}`)
    let content = await util.promisify(fs.readFile)(file, "utf8")
    const result = content.replace(
      /page-data.json(\?v=[a-f0-9]{32})?/g,
      `page-data.json?v=${hash}`
    )
    await util.promisify(fs.writeFile)(file, result, "utf8")
  }
}

exports.onPostBootstrap = async () => {
  const loader = path.join(__dirname, "node_modules/gatsby/cache-dir/loader.js")
  await addPageDataVersion(loader)
}

exports.onPostBuild = async () => {
  const publicPath = path.join(__dirname, "public")
  const htmlAndJsFiles = glob.sync(`${publicPath}/**/*.{html.js}`)
  for (let file of htmlAndJsFiles) {
    await addPageDataVersion(file)
  }
}
