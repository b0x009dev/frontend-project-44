#!/usr/bin/env node

import { pipeline } from '../src/pipeline.js'
import { brainGcdRules, brainGcdRound } from '../src/games/brain-gcd.js'

pipeline(brainGcdRules, brainGcdRound)
