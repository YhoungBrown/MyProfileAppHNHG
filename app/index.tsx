import { useThemeContext } from '@/context/ThemeContext'
import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import About from '../components/About'
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import { ThemedView } from '../components/themed-view'
import style from '../stylesheets/indexStylesheet'

const index = () => {
  const insets = useSafeAreaInsets();
  const {theme} = useThemeContext();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ThemedView style={{ 
          ...style.container, 
          paddingTop: insets.top, 
          paddingBottom: insets.bottom 
        }}>
          
          <About  />  

        <ThemedView style={{ 
            marginRight: 10,
            marginLeft: 10
          }}>
            <ThemedView style={{ 
            height: 0.5,
            flexDirection: 'row',
            width: '100%',
            backgroundColor: theme === 'dark' ? 'gray' : 'green',
            marginVertical: 10
          }} />
        </ThemedView>
          
          <Skills />

          <ThemedView style={{ 
            marginRight: 10,
            marginLeft: 10
          }}>
            <ThemedView style={{ 
            height: 0.5,
            flexDirection: 'row',
            width: '100%',
            backgroundColor: theme === 'dark' ? 'gray' : 'green',
            marginVertical: 15
          }} />
        </ThemedView>

          <Contact />
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index