module.exports = [
  {
    name: "strapi::body",
    config: {
      formLimit: "20mb", // modify form body
      jsonLimit: "20mb", // modify JSON body
      textLimit: "20mb", // modify text body
      formidable: {
        maxFileSize: 100 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
