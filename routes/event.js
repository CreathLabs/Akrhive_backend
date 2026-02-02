const express = require('express');
const router = express.Router();
const prisma = require('../prisma-client');


router.get('/', async (req, res) => {
    try {
        const data = await prisma.event_items.findMany();
        res.json(data);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.post('/create_event', async (req, res) => {
    try {
        const data = await prisma.event_items.create({
            data: req.body
        });
        res.json(data);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Failed to create event' });
    }
});

router.delete('/delete_event/:id', async (req, res) => {
    try {
        const data = await prisma.event_items.delete({
            where: {
                id: req.params.id
            }
        });
        res.json(data);
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Failed to delete event' });
    }
});

router.put('/update_event/:id', async (req, res) => {
    try {
        const data = await prisma.event_items.update({
            where: {
                id: req.params.id
            },
            data: req.body
        });
        res.json(data);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Failed to update event' });
    }
});

module.exports = router;

