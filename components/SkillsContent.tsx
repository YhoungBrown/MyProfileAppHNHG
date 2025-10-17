import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface SkillsContentProps {
  isExpanded: boolean;
}

const SkillsContent: React.FC<SkillsContentProps> = ({ isExpanded }) => {
  const { theme } = useThemeContext();
  const textColor = theme === 'dark' ? 'white' : 'black';
  const linkColor = theme === 'dark' ? '#81b0ff' : '#0a7ea4';

  if (!isExpanded) {
    return (
      <ThemedText 
        type='default'
        style={{
          color: textColor,
          fontSize: 15,
          lineHeight: 24,
          opacity: 0.9,
          textAlign: 'justify',
        }}
      >
        Frontend: React Native, TypeScript, Redux Toolkit, Firebase{'\n'}
        Backend: C# & .NET, SQL Server, JWT Authentication{'\n'}
        Soft Skills: Communication, Problem Solving, Team Collaboration
      </ThemedText>
    );
  }

  return (
    <ThemedView style={{ backgroundColor: 'transparent' }}>
      {/* Frontend Development */}
      <ThemedView style={{ marginBottom: 16, backgroundColor: 'transparent' }}>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 6,
            textDecorationLine: 'underline',
            textDecorationColor: linkColor,
            textDecorationStyle: 'solid',
            backgroundColor: 'transparent',
          }}
        >
          Frontend Development:
        </ThemedText>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 15,
            lineHeight: 24,
            opacity: 0.9,
            marginLeft: 8,
            backgroundColor: 'transparent',
            textAlign: 'justify',
          }}
        >
          React Native (Expo), JavaScript / TypeScript, Redux Toolkit & Context API, Tailwind CSS / NativeWind, React Native Stylesheet, Firebase (Auth, Firestore, Storage), RESTful API Integration, Git & GitHub
        </ThemedText>
      </ThemedView>

      {/* Backend Development */}
      <ThemedView style={{ marginBottom: 16, backgroundColor: 'transparent' }}>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 6,
            textDecorationLine: 'underline',
            textDecorationColor: linkColor,
            textDecorationStyle: 'solid',
            backgroundColor: 'transparent',
          }}
        >
          Backend Development:
        </ThemedText>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 15,
            lineHeight: 24,
            opacity: 0.9,
            marginLeft: 8,
            backgroundColor: 'transparent',
            textAlign: 'justify',
          }}
        >
          C# & .NET (Web API, Entity Framework), SQL Server, JWT Authentication, Role-Based Authorization, API Security & Middleware, Postman / Swagger UI (API Testing), Clean Architecture Principles, Agile Workflow
        </ThemedText>
      </ThemedView>

      {/* Soft Skills */}
      <ThemedView style={{ backgroundColor: 'transparent' }}>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 6,
            textDecorationLine: 'underline',
            textDecorationColor: linkColor,
            textDecorationStyle: 'solid',
            backgroundColor: 'transparent',
          }}
        >
          Soft Skills:
        </ThemedText>
        <ThemedText 
          style={{
            color: textColor,
            fontSize: 15,
            lineHeight: 24,
            opacity: 0.9,
            marginLeft: 8,
            backgroundColor: 'transparent',
            textAlign: 'justify',
          }}
        >
          Strong Communication and Collaboration, Dedication and Resilience, Problem Solving
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default SkillsContent;
