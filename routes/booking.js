const express = require('express');
const router = express.Router();
const prisma = require('../prisma-client');


router.get('/', async (req, res) => {
    try {
        const data = await prisma.booking_requests.findMany();
        res.json(data);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

router.post('/create_booking', async (req, res) => {
    try {
        const data = await prisma.booking_requests.create({
            data: req.body
        });
        res.json(data);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Failed to create event' });
    }
});

router.delete('/delete_booking/:id', async (req, res) => {
    try {
        const data = await prisma.booking_requests.delete({
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

router.put('/update_booking/:id', async (req, res) => {
    try {
        const data = await prisma.booking_requests.update({
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
