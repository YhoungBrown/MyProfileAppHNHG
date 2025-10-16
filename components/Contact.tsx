import { Texts } from '@/constants/Texts'
import React from 'react'
import Details from './Details'
import { ThemedView } from './themed-view'

const Contact = () => {
  
  return (
    <ThemedView>
      <Details headline={Texts.contactHeadline} body={Texts.contactBody} />
      <Details body={Texts.contactAdress} />
    </ThemedView>
  )
}

export default Contact