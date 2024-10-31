// routes/project.js

const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.getAll();
        res.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error.message);
        res.status(500).json({ error: 'Error fetching projects' });
    }
});


// Create a new project
router.post('/', async (req, res) => {
    try {
        const project = req.body;

        // Basic validation
        if (!project.name || !project.description) {
            return res.status(400).json({ error: 'Project name and description are required' });
        }

        const result = await Project.create(project);
        res.status(201).json({ id: result.insertId, ...project });
    } catch (error) {
        console.error('Error creating project:', error.message);
        res.status(500).json({ error: 'Error creating project' });
    }
});

module.exports = router;
