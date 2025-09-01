'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Purchases', 'updatedAt');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Purchases', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('NOW')
    });
  }
};
