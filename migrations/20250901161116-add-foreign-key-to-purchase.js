'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Purchases', 'itemId', {
      type: Sequelize.INTEGER,
      references: { model: 'Items', key: 'id' }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('Purchases', 'itemId', {
      type: Sequelize.INTEGER,
      references: null
    })
  }
};
