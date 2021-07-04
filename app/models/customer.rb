require 'bcrypt'
class Customer < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    has_many :kennels 
    has_secure_password  
    include BCrypt 
      
    devise :database_authenticatable, :registerable,
        :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist
    validates :email, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false, format: { with: /\A[a-zA-Z0-9]+\z/ }

end
