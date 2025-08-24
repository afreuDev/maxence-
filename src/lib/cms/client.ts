const { DATOCMS_API_TOKEN } = import.meta.env;

export const CMS_ENABLED = import.meta.env.CMS_ENABLED === 'true' && !!DATOCMS_API_TOKEN;
