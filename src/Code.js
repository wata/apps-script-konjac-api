var global = this;function doPost() {
}
function succeed() {
}
function fail() {
}
function makeResponse() {
}(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
(function (global){
"use strict";

global.doPost = function (e) {
  var text = e.parameter.text;
  var target = e.parameter.target;
  var source = e.parameter.source || ""; // If it is set to the empty string, the source language code will be auto-detected
  var type = e.parameter.type === "html" ? "html" : "text";

  if (!text) {
    return fail("Missing text");
  }
  if (!target) {
    return fail("Missing target");
  }

  return succeed({
    translatedText: LanguageApp.translate(text, source, target, { contentType: type })
  });
};

global.succeed = function (data) {
  return makeResponse({ data: data });
};

global.fail = function (message) {
  return makeResponse({ message: message });
};

global.makeResponse = function (res) {
  return ContentService.createTextOutput(JSON.stringify(res)).setMimeType(ContentService.MimeType.JSON);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
