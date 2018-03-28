# konjac-api

Self-Hosting Free Google Translate API by Google Apps Script

- [LanguageApp](https://developers.google.com/apps-script/reference/language/language-app)
- [Translation API](https://cloud.google.com/translate/docs/reference/translate)

## Translation API

This API calls [`LanguageApp.translate(text, sourceLanguage, targetLanguage)`](https://developers.google.com/apps-script/reference/language/language-app#translate(String,String,String))

`POST https://script.google.com/macros/s/${your-script-id}/exec`

### Input

Name | Type | Description
---- | ---- | ----
`text` | `string` | *Required*.
`target` | `string` |  *Required*. A list of language codes is available [here](https://cloud.google.com/translate/docs/languages)
`source` | `string` | If it is set to the empty string, the source language code will be auto-detected
`type` | `string` | Supported values are 'text' (default) and 'html'

```sh
curl -L -d "text=konjac&target=ja" https://script.google.com/macros/s/${your-script-id}/exec
```

### Response

```json
{
  "data": {
    "translatedText": "コンニャク"
  }
}
```

## Examples

- [vscode-konjac](https://github.com/wata/vscode-konjac)
