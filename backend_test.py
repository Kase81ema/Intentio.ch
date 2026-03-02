#!/usr/bin/env python3

import requests
import sys
import json
from datetime import datetime

class IntentioAPITester:
    def __init__(self, base_url="https://people-leadership.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=30)

            print(f"   Response Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_json = response.json()
                    print(f"   Response: {json.dumps(response_json, indent=2)}")
                except:
                    print(f"   Response Text: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response Text: {response.text[:200]}...")

            return success, response.json() if response.status_code < 400 else {}

        except requests.exceptions.Timeout:
            print(f"❌ Failed - Request timeout (30s)")
            return False, {}
        except requests.exceptions.ConnectionError:
            print(f"❌ Failed - Connection error")
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        return self.run_test("Root endpoint", "GET", "api/", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "nome": "Mario Rossi",
            "azienda": "Test Company",
            "ruolo": "Manager",
            "email": "mario.rossi@test.com",
            "telefono": "+39 123 456 7890",
            "area_interesse": "Formazione",
            "obiettivo": "Migliorare le competenze del team",
            "tempistiche": "Entro 3 mesi",
            "privacy_consent": True
        }
        
        return self.run_test(
            "Contact form submission",
            "POST",
            "api/contact",
            200,
            data=test_data
        )

    def test_get_contacts(self):
        """Test getting contacts (admin endpoint)"""
        return self.run_test("Get contacts", "GET", "api/contacts", 200)

    def test_invalid_contact_submission(self):
        """Test contact form with missing required fields"""
        invalid_data = {
            "nome": "Test User",
            "email": "test@test.com"
            # Missing required fields: azienda, ruolo, area_interesse, tempistiche, privacy_consent
        }
        
        success, response = self.run_test(
            "Invalid contact form (missing fields)",
            "POST",
            "api/contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success, response

    def test_contact_without_privacy_consent(self):
        """Test contact form without privacy consent"""
        data_no_consent = {
            "nome": "Mario Rossi", 
            "azienda": "Test Company",
            "ruolo": "Manager",
            "email": "mario.rossi@test.com",
            "telefono": "+39 123 456 7890",
            "area_interesse": "Formazione",
            "obiettivo": "Test obiettivo",
            "tempistiche": "Entro 3 mesi",
            "privacy_consent": False  # Should fail
        }
        
        return self.run_test(
            "Contact form without privacy consent",
            "POST", 
            "api/contact",
            400,  # Expecting validation error (Italian message)
            data=data_no_consent
        )

def main():
    print("=" * 60)
    print("🧪 INTENTIO NOVA API TESTING")
    print("=" * 60)
    
    tester = IntentioAPITester()
    
    # Test all endpoints
    print("\n📋 Testing API Endpoints...")
    
    tester.test_root_endpoint()
    tester.test_contact_submission()
    tester.test_get_contacts()
    tester.test_invalid_contact_submission()
    tester.test_contact_without_privacy_consent()
    
    # Print final results
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {tester.tests_run - tester.tests_passed}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"Success Rate: {success_rate:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())