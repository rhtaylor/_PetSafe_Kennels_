json.extract! customer, :id, :name, :number, :email, :city, :created_at, :updated_at
json.url customer_url(customer, format: :json)
