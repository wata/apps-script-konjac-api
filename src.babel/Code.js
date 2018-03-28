'use strict'

global.doPost = (e) => {
  const text = e.parameter.text
  const target = e.parameter.target
  const source = e.parameter.source || '' // If it is set to the empty string, the source language code will be auto-detected
  const type = e.parameter.type === 'html' ? 'html' : 'text'

  if (!text) {
    return fail('Missing text')
  }
  if (!target) {
    return fail('Missing target')
  }

  return succeed({
    translatedText: LanguageApp.translate(text, source, target, { contentType: type })
  })
}

global.succeed = (data) => {
  return makeResponse({ data: data })
}

global.fail = (message) => {
  return makeResponse({ message: message })
}

global.makeResponse = (res) => {
  return ContentService
    .createTextOutput(JSON.stringify(res))
    .setMimeType(ContentService.MimeType.JSON)
}
