const express = require('express');
const cors = require('cors');
const { members, absences } = require('../api/api');

const router = new express.Router()

router.use(cors());

router.get('/', async (req, res) => {
    const membersData = await members();
    const absencesData = await absences();
    const membersAbsences = [];

    for (let i = 0; i < absencesData.length; i++) {
        membersAbsences.push({
            key: i,
            ...absencesData[i],
            ...(membersData.find((members) => members.userId === absencesData[i].userId))
        }
        );
    }

    res.setHeader('Content-Type', 'application/json');
    return res.json(JSON.stringify({ membersAbsences }));
});

module.exports = router;