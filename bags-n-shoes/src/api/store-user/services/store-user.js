'use strict';

/**
 * store-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::store-user.store-user');
