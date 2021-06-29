require 'bcrypt'
class Customer < ApplicationRecord 
    include BCrypt
    has_many :kennels 
    has_secure_password 
end
