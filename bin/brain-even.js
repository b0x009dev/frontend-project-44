#!/usr/bin/env node

import { pipeline } from '../src/pipeline.js'
import { brainEvenRules, brainEvenRound } from '../src/games/brain-even.js'

pipeline(brainEvenRules, brainEvenRound)
