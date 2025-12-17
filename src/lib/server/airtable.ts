import Airtable from 'airtable';
import { env } from '$env/dynamic/private';

if (env.AIRTABLE_TOKEN) Airtable.configure({ apiKey: env.AIRTABLE_TOKEN });
