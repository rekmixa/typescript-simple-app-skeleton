import fs from 'fs'

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

  if (bytes === 0) {
    return '0 Byte'
  }

  const size = Math.floor(Math.floor(Math.log(bytes) / Math.log(1024)))

  return Math.round(bytes / Math.pow(1024, size)) + ' ' + sizes[size]
}

export function showUptime(): string {
  function format(time: number) {
    function pad(s: number) {
      return (s < 10 ? '0' : '') + s
    }

    const hours = Math.floor(time / (60 * 60))
    const minutes = Math.floor((time % (60 * 60)) / 60)
    const seconds = Math.floor(time % 60)

    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  }

  return format(process.uptime())
}

export function filePutContents(filename: string, content: string): void {
  fs.writeFileSync(filename, content)
}

export function arrayUnique<T>(array: T[]): T[] {
  return array.reduce((carry: T[], value: T): T[] => {
    if (carry.indexOf(value) === -1) {
      carry.push(value)
    }

    return carry
  }, [])
}

export function jsonEncode(data: any): string {
  return JSON.stringify(data, null, 2)
}
