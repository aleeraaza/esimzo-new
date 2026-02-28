import { getProviders } from '@/lib/services/providers/providers.services'
import ProvidersCarousel from '../design-layout/ProvidersCarousel'

export default async function GetProviders() {
    const providers = await getProviders()
  return (
    <ProvidersCarousel providers={providers} />
  )
}
