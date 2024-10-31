const express = require('express');
const cors = require('cors');
const projectsRoutes = require('./routes/projects');
const chatRoutes = require('./routes/chat');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./config/db');

// Middleware
app.use(cors({
    origin:[""],
    methods:["POST","GET"],
    credentials:true
}));
app.use(express.json());

// Routes
app.use('/api/projects', projectsRoutes);
app.use('/api/chat', chatRoutes);

app.get("/",(req,res) =>{
    res.json("Sucess");
})
// server.js or app.js
app.get('/api/projects/:id', async (req, res) => {
    const projectId = req.params.id;
    try {
        const [project] = await db.query('SELECT * FROM projects WHERE id = ?', [projectId]); // Replace `db` with your actual database connection
        if (!project.length) {
            return res.status(404).send('Project not found');
        }
        res.json(project[0]); // Return the first project object
    } catch (error) {
        console.error('Error fetching project:', error); // Log the error for debugging
        res.status(500).send('Server error');
    }
});



// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
