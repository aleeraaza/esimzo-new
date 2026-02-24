import { capitalize } from '@/lib/constants';
import React from 'react'

type PropsType = {
    providerName: Promise<string>;
    countryName: Promise<string>;
}

export default function ProviderPackageHeader({providerName, countryName}: PropsType) {
  return (
    <header>
        <h1>{capitalize(providerName)} eSIM Data Plans for {capitalize(countryName)}
</h1>
    </header>
  )
}
