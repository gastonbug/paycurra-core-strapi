module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        authType: env("STORAGE_AUTH_TYPE", "default"),
        account: env("STORAGE_ACCOUNT"),
        accountKey: env("STORAGE_ACCOUNT_KEY"),
        serviceBaseURL: env("STORAGE_URL"),
        containerName: env("STORAGE_CONTAINER_NAME"),
        createContainerIfNotExist: env("STORAGE_CREATE_CONTAINER_IF_NOT_EXIST", "false"),
        publicAccessType: env("STORAGE_PUBLIC_ACCESS_TYPE"),
        defaultPath: "assets",
        cdnBaseURL: env("STORAGE_CDN_URL"),
        defaultCacheControl: env("STORAGE_CACHE_CONTROL"), 
        removeCN: env("REMOVE_CONTAINER_NAME"),
      },
    },
  },
});
