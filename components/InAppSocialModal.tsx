import { Texts } from '@/constants/Texts';
import React from 'react';
import { Linking, Modal, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface InAppSocialModalProps {
  visible: boolean;
  onClose: () => void;
  socialType: 'linkedin' | 'twitter' | 'email';
}

const InAppSocialModal: React.FC<InAppSocialModalProps> = ({ visible, onClose, socialType }) => {
  const { theme } = useThemeContext();
  const linkColor = theme === 'dark' ? '#81b0ff' : '#16a34a';

  const getSocialContent = () => {
    switch (socialType) {
       case 'linkedin':
         return {
           title: 'LinkedIn Profile',
           icon: 'in',
           content: `Connect with me on LinkedIn to explore professional opportunities and network with fellow developers.\n\nMy LinkedIn profile showcases my professional journey, projects, and achievements in mobile app development and backend systems.\n\nFeel free to send me a connection request or message to discuss potential collaborations, job opportunities, or technical discussions.`,
           actionText: 'Open LinkedIn',
           actionUrl: Texts.linkedinUrl,
         };
       case 'twitter':
         return {
           title: 'Twitter Profile',
           icon: '𝕏',
           content: `Follow me on Twitter for tech insights, development tips, and updates on my latest projects.\n\nI share thoughts on React Native development, backend technologies, and the latest trends in mobile app development.\n\nLet's connect and share knowledge in the developer community!`,
           actionText: 'Open Twitter',
           actionUrl: Texts.twitterUrl,
         };
       case 'email':
         return {
           title: 'Email Contact',
           icon: '@',
           content: `Get in touch with me directly via email for professional inquiries, project discussions, or collaboration opportunities.\n\nI'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and development.\n\nI typically respond within 24 hours.`,
           actionText: 'Send Email',
           actionUrl: `mailto:${Texts.email}`,
         };
      default:
        return {
          title: 'Contact Information',
          icon: '📞',
          content: 'Contact information not available.',
          actionText: 'Close',
          actionUrl: '',
        };
    }
  };

  const socialData = getSocialContent();

  const handleAction = async () => {
    if (socialData.actionUrl) {
      try {
        await Linking.openURL(socialData.actionUrl);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <ThemedView style={[
          styles.modalContainer,
          {
            backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
            borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          }
        ]}>
           {/* Header with X button */}
           <ThemedView style={[styles.header, { backgroundColor: 'transparent' }]}>
             <ThemedText style={styles.headerIcon}>{socialData.icon}</ThemedText>
             <ThemedText type="title" style={[
               styles.modalTitle,
               { color: theme === 'dark' ? 'white' : 'black' }
             ]}>
               {socialData.title}
             </ThemedText>
             <Pressable onPress={onClose} style={styles.closeButton}>
               <ThemedText style={styles.closeIcon}>✕</ThemedText>
             </Pressable>
           </ThemedView>

           {/* Scrollable Content */}
           <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
             <ThemedText style={[
               styles.contentText,
               { color: theme === 'dark' ? 'white' : 'black' }
             ]}>
               {socialData.content}
             </ThemedText>
           </ScrollView>

           {/* Action Button */}
           <ThemedView style={[styles.buttonContainer, { backgroundColor: 'transparent' }]}>
             <Pressable 
               style={[
                 styles.actionButton,
                 { 
                   backgroundColor: linkColor,
                   borderColor: linkColor,
                 }
               ]} 
               onPress={handleAction}
             >
               <ThemedText style={styles.actionButtonText}>
                 {socialData.actionText}
               </ThemedText>
             </Pressable>
           </ThemedView>
        </ThemedView>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  modalContainer: {
    borderRadius: 20,
    padding: 0,
    width: '100%',
    maxWidth: 400,
    minWidth: 280,
    maxHeight: '80%',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    backgroundColor: 'transparent',
  },
  headerIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  modalTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  contentContainer: {
    maxHeight: 300,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    opacity: 0.9,
  },
  buttonContainer: {
    padding: 20,
    paddingTop: 0,
  },
  actionButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default InAppSocialModal;
