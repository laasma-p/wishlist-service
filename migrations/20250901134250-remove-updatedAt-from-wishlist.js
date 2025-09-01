'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Wishlists', 'updatedAt');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Wishlists', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    });
  }
};
