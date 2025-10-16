import { Texts } from '@/constants/Texts';
import React from 'react';
import Details from './Details';
import { ThemedView } from './themed-view';

const Skills = () => {

  return (
    <ThemedView style={{marginBottom: 10}}>
      <Details headline={Texts.skillsHeadline} body={Texts.skillsBodyfrontend}/>
      <Details body={Texts.skillsBodybackend} />
      <Details body={Texts.skillsBodySoftskills} />
    </ThemedView>
  )
}

export default Skills