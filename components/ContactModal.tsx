import { Texts } from '@/constants/Texts';
import React from 'react';
import { Linking, Modal, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

interface ContactModalProps {
  visible: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ visible, onClose }) => {
  const { theme } = useThemeContext();
  const linkColor = theme === 'dark' ? '#81b0ff' : '#16a34a';

  const handleSocialPress = async (socialType: 'linkedin' | 'twitter' | 'email') => {
    let url = '';
    
    switch (socialType) {
      case 'email':
        url = `mailto:${Texts.email}`;
        break;
      case 'linkedin':
        url = Texts.linkedinUrl;
        break;
      case 'twitter':
        url = Texts.twitterUrl;
        break;
    }

    if (url) {
      try {
        await Linking.openURL(url);
        onClose(); // Close the modal after opening the link
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
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
          <ThemedText type="title" style={[
            styles.modalTitle,
            { color: theme === 'dark' ? 'white' : 'black' }
          ]}>
            Contact Information
          </ThemedText>

          <ThemedView style={[styles.contactList, { backgroundColor: 'transparent' }]}>
            <TouchableOpacity 
              onPress={() => handleSocialPress('email')} 
              style={styles.contactItemContainer}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.contactIcon}>@</ThemedText>
              <ThemedText type="link" style={[styles.contactItem, { color: linkColor }]}>
                Email: {Texts.email}
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => handleSocialPress('linkedin')} 
              style={styles.contactItemContainer}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.contactIcon}>in</ThemedText>
              <ThemedText type="link" style={[styles.contactItem, { color: linkColor }]}>
                LinkedIn: Omotola Odumosu
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity 
              onPress={() => handleSocialPress('twitter')} 
              style={styles.contactItemContainer}
              activeOpacity={0.7}
            >
              <ThemedText style={styles.contactIcon}>𝕏</ThemedText>
              <ThemedText type="link" style={[styles.contactItem, { color: linkColor }]}>
                Twitter: @YhoungBrown
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>

          <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={0.7}>
            <ThemedText style={[
              styles.closeButtonText,
              { color: theme === 'dark' ? 'white' : 'black' }
            ]}>
              Close
            </ThemedText>
          </TouchableOpacity>
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
    borderRadius: 16,
    padding: 20,
    width: '100%',
    maxWidth: 400,
    minWidth: 280,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  modalTitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  contactList: {
    marginBottom: 20,
  },
  contactItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  contactItem: {
    fontSize: 16,
    flex: 1,
    backgroundColor: 'transparent',
  },
  closeButton: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContactModal;
