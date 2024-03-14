/**
 * 处理路径斜杠
 * @param {string} path 需要处理的路径
 * @returns {string} 处理后的路径
 */
export function handlePath(path) {
  // 反斜杠转换为正斜杠
  path = path.replace(/\\/g, '/')
  // 如果末尾有斜杠，去掉
  if (path.endsWith('/'))
    path = path.slice(0, -1)

  return path
}
