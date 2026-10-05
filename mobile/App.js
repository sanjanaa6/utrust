import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function App() {
  const [activeTab, setActiveTab] = useState('new'); // 'new' | 'popular'
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView style={styles.container}>
        
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoNandi}>NANDI</Text>
            <View style={styles.logoTrustContainer}>
              <Text style={styles.logoTrustTop}>Toyota</Text>
              <Text style={styles.logoTrustBottom}><Text style={styles.logoTrustU}>U</Text>TRUST</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.menuBtn}>☰</Text>
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }} 
            style={styles.heroImage} 
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Discover Your Drive</Text>
            <Text style={styles.heroSubtitle}>Where Value Meets Performance</Text>
            <TouchableOpacity style={styles.searchBtn}>
              <Text style={styles.searchBtnText}>Search Cars</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cars Section */}
        <View style={styles.carsSection}>
          <View style={styles.tabs}>
            <TouchableOpacity style={[styles.tab, activeTab === 'new' && styles.tabActive]} onPress={() => setActiveTab('new')}>
              <Text style={[styles.tabText, activeTab === 'new' && styles.tabTextActive]}>New Arrivals</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tab, activeTab === 'popular' && styles.tabActive]} onPress={() => setActiveTab('popular')}>
              <Text style={[styles.tabText, activeTab === 'popular' && styles.tabTextActive]}>Most Popular</Text>
            </TouchableOpacity>
          </View>

          {/* Single Car Card for demo */}
          <View style={styles.carCard}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' }} 
              style={styles.carImage} 
            />
            <View style={styles.carDetails}>
              <Text style={styles.carTitle}>2025 Toyota Glanza V AMT</Text>
              <Text style={styles.carSpecs}>7531 km • Petrol • Manual</Text>
              <Text style={styles.carPrice}>₹ 10.90 Lakhs</Text>
              <Text style={styles.carLocation}>📍 Hosur Road, Bangalore</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.viewAllBtn}>
            <Text style={styles.viewAllBtnText}>View All Cars</Text>
          </TouchableOpacity>
        </View>
        
        {/* Footer Minimal */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Nandi Toyota U Trust.</Text>
          <Text style={styles.footerText}>All rights reserved.</Text>
        </View>

      </ScrollView>
      
      {/* Floating Action Buttons */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={[styles.fab, styles.fabCall]} activeOpacity={0.8}>
          <Text style={styles.fabIcon}>📞</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fab, styles.fabWhatsapp]} activeOpacity={0.8}>
          <Text style={styles.fabIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.fab, styles.fabChat]} activeOpacity={0.8}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80' }} 
            style={styles.chatImage} 
          />
          <View style={styles.chatBadge} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoNandi: {
    fontSize: 20,
    fontWeight: '800',
    marginRight: 5,
  },
  logoTrustContainer: {
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 3,
  },
  logoTrustTop: {
    fontSize: 7,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  logoTrustBottom: {
    fontSize: 14,
    fontWeight: '800',
  },
  logoTrustU: {
    color: '#cc0000',
  },
  menuBtn: {
    fontSize: 24,
    color: '#333',
  },
  heroSection: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBtn: {
    backgroundColor: '#cc0000',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
  },
  searchBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  carsSection: {
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    borderBottomColor: '#cc0000',
  },
  tabText: {
    fontWeight: '600',
    color: '#888',
  },
  tabTextActive: {
    color: '#222',
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#eee',
  },
  carDetails: {
    padding: 15,
  },
  carTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
    marginBottom: 5,
  },
  carSpecs: {
    fontSize: 12,
    color: '#777',
    marginBottom: 10,
  },
  carPrice: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    marginBottom: 10,
  },
  carLocation: {
    fontSize: 12,
    color: '#555',
  },
  viewAllBtn: {
    borderWidth: 1,
    borderColor: '#cc0000',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  viewAllBtnText: {
    color: '#cc0000',
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#111',
    padding: 30,
    alignItems: 'center',
  },
  footerText: {
    color: '#888',
    fontSize: 12,
    marginTop: 5,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'center',
  },
  fab: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 15,
  },
  fabCall: {
    backgroundColor: '#2563eb',
  },
  fabWhatsapp: {
    backgroundColor: '#25D366',
  },
  fabChat: {
    backgroundColor: '#fff',
    marginBottom: 0, // No margin for the last item
  },
  fabIcon: {
    fontSize: 24,
    color: 'white',
  },
  chatImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },
  chatBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 14,
    height: 14,
    backgroundColor: '#cc0000',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#fff',
  }
});
