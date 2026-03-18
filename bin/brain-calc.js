#!/usr/bin/env node

import { pipeline } from '../src/pipeline.js'
import { brainCalcRules, brainCalcRound } from '../src/games/brain-calc.js'

pipeline(brainCalcRules, brainCalcRound)
