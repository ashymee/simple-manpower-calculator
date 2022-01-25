import create from 'zustand'

const useStore = create(set => ({
      username: '',
}))

export default useStore
