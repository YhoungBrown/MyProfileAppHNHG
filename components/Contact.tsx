import { Texts } from '@/constants/Texts'
import { useThemeContext } from '@/context/ThemeContext'
import React, { useState } from 'react'
import ContactModal from './ContactModal'
import Details from './Details'
import { ThemedView } from './themed-view'

const Contact = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useThemeContext();

  return (
    <ThemedView>
      <Details 
        headline={Texts.contactHeadline} 
        briefText={Texts.contactBrief} 
        fullText={Texts.contactFull}
        onContactClick={() => setModalVisible(true)}
      />
      <ContactModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
      />
    </ThemedView>
  )
}

export default Contact