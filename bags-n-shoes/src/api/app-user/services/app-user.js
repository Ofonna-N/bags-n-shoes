'use strict';

/**
 * app-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-user.app-user');
