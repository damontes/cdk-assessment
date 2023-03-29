#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkAssessmentStack } from '../lib/cdk-assessment-stack';

const app = new cdk.App();
new CdkAssessmentStack(app, 'CdkAssessmentStack');
