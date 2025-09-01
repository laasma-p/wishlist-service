'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Items', 'wishlistId', {
      type: Sequelize.INTEGER,
      references: { model: 'Wishlists', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Items', 'wishlistId', {
      type: Sequelize.INTEGER,
      references: null
    })
  }
};
