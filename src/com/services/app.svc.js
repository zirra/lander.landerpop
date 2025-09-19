//import api from '@/com/system/api'

class AppServices {
  async getApp (property = null, user = null) {
    return { property, user }
  }

  async saveApp () {
    return true
  }

  async updateApp () {
    return true
  }

  async deleteApp () {
    return true
  }
}

export default new AppServices()