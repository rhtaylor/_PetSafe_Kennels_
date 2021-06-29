require 'test_helper'

class KennelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kennel = kennels(:one)
  end

  test "should get index" do
    get kennels_url
    assert_response :success
  end

  test "should get new" do
    get new_kennel_url
    assert_response :success
  end

  test "should create kennel" do
    assert_difference('Kennel.count') do
      post kennels_url, params: { kennel: { customer_id: @kennel.customer_id, kennel_type: @kennel.kennel_type, labor_cost: @kennel.labor_cost, material_cost: @kennel.material_cost, price: @kennel.price } }
    end

    assert_redirected_to kennel_url(Kennel.last)
  end

  test "should show kennel" do
    get kennel_url(@kennel)
    assert_response :success
  end

  test "should get edit" do
    get edit_kennel_url(@kennel)
    assert_response :success
  end

  test "should update kennel" do
    patch kennel_url(@kennel), params: { kennel: { customer_id: @kennel.customer_id, kennel_type: @kennel.kennel_type, labor_cost: @kennel.labor_cost, material_cost: @kennel.material_cost, price: @kennel.price } }
    assert_redirected_to kennel_url(@kennel)
  end

  test "should destroy kennel" do
    assert_difference('Kennel.count', -1) do
      delete kennel_url(@kennel)
    end

    assert_redirected_to kennels_url
  end
end
