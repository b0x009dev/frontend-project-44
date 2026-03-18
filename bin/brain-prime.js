#!/usr/bin/env node

import { pipeline } from '../src/pipeline.js'
import { brainPrimeRules, brainPrimeRound } from '../src/games/brain-prime.js'

pipeline(brainPrimeRules, brainPrimeRound)
