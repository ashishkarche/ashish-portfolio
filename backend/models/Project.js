// models/Project.js
const db = require('../config/db');

const Project = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM projects');
        return rows;
    },
    create: async (project) => {
        const [result] = await db.query('INSERT INTO projects SET ?', project);
        return result;
    },
};

module.exports = Project;
