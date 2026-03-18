#!/usr/bin/env node

import { pipeline } from '../src/pipeline.js'
import { brainProgressionRules, brainProgressionRound } from '../src/games/brain-progression.js'

pipeline(brainProgressionRules, brainProgressionRound)
